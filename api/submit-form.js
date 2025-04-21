export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const body = req.body;
        const { formId, submissions } = body;

        if (!formId) {
            return res.status(400).json({ message: 'Form ID is required' });
        }

        const response = await fetch(
            `https://api.fillout.com/v1/api/forms/${formId}/submissions/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.FILLOUT_API_KEY}`
                },
                body: JSON.stringify({ submissions })
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error response from Fillout API:', errorData);
            throw new Error('Failed to submit form');
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error('Error submitting form:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}