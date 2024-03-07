const axios = require('axios')
require('dotenv').config()

const { API_KEY } = process.env

exports.getResponces = async (req, res) => {
  const formId = "cLZojxk94ous"
  const queryParams = req.query;
  const filters = req.body;

  try {
    const response = await axios.get(`https://api.fillout.com/v1/api/forms/${formId}/submissions`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` },
      params: queryParams,
    });

    let json = response.data.responses;

    json = json.map(responseItem => {
      if (responseItem.questions && responseItem.questions.length > 0 && Object.keys(filters).length !== 0) {
        responseItem.questions = responseItem.questions.filter(question => {
          return filters.some(filter => filter.type === question.type);
        });
      }
      return responseItem;
    });

    res.status(200).json({ responses: json });
  } catch (error) {

    res.status(500).send('Failed to fetch form responses');
  }
};

















