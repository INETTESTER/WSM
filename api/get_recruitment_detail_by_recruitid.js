import http from 'k6/http';

export function get_recruitment_detail_by_recruitid() {
  const url = 'https://pentest-apiworkspacemoph.one.th/api/v1/recruitment/public/recruit-detail/5446';

  const params = {
    headers: {
      'Accept': 'application/json',
      // 'Authorization': `Bearer ${__ENV.TOKEN}`, // ถ้ามี token ให้เปิดใช้ได้
    },
  };

  const res = http.get(url, params);

  // แสดง status และ body ของ response
  console.log('--- Response status: ' + res.status + ' ---');
  console.log('--- Response body start ---');
  console.log(res.body);
  console.log('--- Response body end ---');

  return res;
}
