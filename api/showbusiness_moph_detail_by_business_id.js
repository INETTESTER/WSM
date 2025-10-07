import http from 'k6/http';

export function showbusiness_moph_detail_by_business_id() {
  const url = 'https://pentest-apiworkspacemoph.one.th/api/v1/business/public/show-business-moph/170192001081810';
  const params = {
    headers: {
      'Accept': 'application/json',
      // ถ้าต้องการใช้ Authorization ให้เปิดคอมเมนต์ด้านล่างและตั้ง __ENV.TOKEN
      // 'Authorization': `Bearer ${__ENV.TOKEN}`,
    },
  };

  const res = http.get(url, params);

  // Log response status + body (ถ้า body ใหญ่มาก อาจจะต้องตัดหรือ parse เฉพาะส่วน)
  console.log('--- Response status: ' + res.status + ' ---');
  console.log('--- Response body start ---');
  console.log(res.body);
  console.log('--- Response body end ---');

  return res;
}
