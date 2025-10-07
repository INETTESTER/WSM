import http from 'k6/http';

export function get_recruitment_by_businessid() {
  const url = 'https://pentest-apiworkspacemoph.one.th/api/v1/recruitment/public/recruit-detail-moph?business_id=170192001081810&search=&sort_by=job_date_desc&job_type=job_general&page=1&limit_per_page=8';

  const params = {
    headers: {
      'Accept': 'application/json',
      // 'Authorization': `Bearer ${__ENV.TOKEN}`, // ถ้ามี token ให้เปิดใช้
    },
  };

  const res = http.get(url, params);

  // Log status และ body
  console.log('--- Response status: ' + res.status + ' ---');
  console.log('--- Response body start ---');
  console.log(res.body);
  console.log('--- Response body end ---');

  return res;
}
