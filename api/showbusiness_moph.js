import http from 'k6/http';

export function showbusiness_moph() {
  const url = 'https://pentest-apiworkspacemoph.one.th/api/v1/business/public/show-business-moph?page=1&limit_per_page=32&sort_by=latest_job&provider_type=providerID';
  const params = {
    headers: {
      'Accept': 'application/json',
      // 'Authorization': `Bearer ${__ENV.TOKEN}`, // ถ้าต้องการใช้ token ให้เปิดคอมเมนต์และตั้ง env var __ENV.TOKEN
    },
  };

  const res = http.get(url, params);

  // แสดง response body (ถ้าใหญ่เกินไปอาจจะตัดหรือ parse ก่อน)
  // console.log('--- Response status: ' + res.status + ' ---');
  // console.log('--- Response body start ---');
  // console.log(res.body);
  // console.log('--- Response body end ---');

  return res;
}
