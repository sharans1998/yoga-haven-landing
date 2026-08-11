export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const apiKey = process.env.FILLOUT_API_KEY;
        if (!apiKey) {
            console.error('Server configuration error: FILLOUT_API_KEY is missing');
            return res.status(500).json({ message: 'Server configuration error' });
        }

        const body = req.body || {};
        const { formId, submissions } = body;

        // Strict input validation to prevent SSRF and path traversal
        if (!formId || typeof formId !== 'string' || !/^[a-zA-Z0-9_-]{5,64}$/.test(formId)) {
            return res.status(400).json({ message: 'Invalid or missing form ID' });
        }

        if (!submissions || !Array.isArray(submissions)) {
            return res.status(400).json({ message: 'Invalid or missing submissions format' });
        }

        // Validate Origin / Host header if present to mitigate CSRF/unauthorized cross-site calls
        const origin = req.headers.origin || req.headers.referer;
        if (origin) {
            const isLocal = origin.includes('localhost') || origin.includes('127.0.0.1');
            const isAllowedDomain = origin.includes('yonitara.com') || origin.includes('vercel.app');
            if (!isLocal && !isAllowedDomain) {
                return res.status(403).json({ message: 'Forbidden: Invalid origin' });
            }
        }

        const encodeFormId = encodeURIComponent(formId);
        const response = await fetch(
            `https://api.fillout.com/v1/api/forms/${encodeFormId}/submissions/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({ submissions })
            }
        );

        if (!response.ok) {
            console.error(`Fillout API error status: ${response.status}`);
            return res.status(response.status).json({ message: 'Failed to submit form to provider' });
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error('Error in submit-form handler:', error instanceof Error ? error.message : 'Unknown error');
        return res.status(500).json({ message: 'Internal server error' });
    }
}