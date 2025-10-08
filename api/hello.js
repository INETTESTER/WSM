import http from 'k6/http';

export function hello() {
  const url = 'https://pentest-apiworkspacemoph.one.th/api/v1/health/check-health-hello';

  const params = {
    headers: {
      'Accept': 'application/json',
      // 'Authorization': `Bearer ${__ENV.TOKEN}`, // ถ้ามี token ให้เปิดใช้ได้
    },
  };

  const res = http.get(url, params);

  // แสดงผลลัพธ์ (log)
  // console.log('--- Response status: ' + res.status + ' ---');
  // console.log('--- Response body start ---');
  // console.log(res.body);
  // console.log('--- Response body end ---');

  return res;
}
