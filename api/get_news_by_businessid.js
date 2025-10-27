import http from 'k6/http';

export function get_news_by_businessid() {
  const url = 'https://pentest-apiworkspacemoph.one.th/api/v1/business/public/business_news?business_id=170192001081810&search=&sort=DESC&page=1&limit_per_page=10';

  const params = {
    headers: {
      'Accept': 'application/json',
      // 'Authorization': `Bearer ${__ENV.TOKEN}`, // ถ้ามี token ให้เปิดใช้
    },
  };

  const res = http.get(url, params);

  // log response status และ body
  // console.log('--- Response status: ' + res.status + ' ---');
  // console.log('--- Response body start ---');
  // console.log(res.body);
  // console.log('--- Response body end ---');

  return res;
}
