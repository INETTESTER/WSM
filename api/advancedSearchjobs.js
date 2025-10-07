import http from 'k6/http';

export function advancedSearchjobs() {
  const url = 'https://pentest-apiworkspacemoph.one.th/api/v1/recruitment/public/advanced-searchjobs?provider_type=providerID';

  const payload = JSON.stringify({
    "keyword": [],
    "business_sector": [],
    "job_type": [],
    "location": [],
    "min_salary": null,
    "max_salary": null,
    "degree": [],
    "employee_type": [],
    "job_position": [],
    "business_type": [],
    "page": 1,
    "limit_per_page": 8,
    "urgent_required": null,
    "sort_by": "latest_posted",
    "account_id": ""
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${__ENV.TOKEN}`, // ถ้ามี token ให้เปิดใช้
    },
  };

  const res = http.post(url, payload, params);

  // Log status และ body
  console.log('--- Response status: ' + res.status + ' ---');
  console.log('--- Response body start ---');
  console.log(res.body);
  console.log('--- Response body end ---');

  return res;
}
