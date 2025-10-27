import http from 'k6/http';

export function get_news_detail_by_businessid_and_news_id() {
  const url = 'https://pentest-apiworkspacemoph.one.th/api/v1/business/public/business_news_detail_user/2618306966434812/947';

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
