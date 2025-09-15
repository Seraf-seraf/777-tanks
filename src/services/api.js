import axios from 'axios';

const client = axios.create({
  baseURL: '/api',
});

export default {
  async getCaseItems(caseId) {
    const res = await client.get(`/cases/${caseId}/items`);
    return res.data;
  },
};
