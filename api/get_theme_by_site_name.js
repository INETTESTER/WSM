import http from 'k6/http';

export function get_theme_by_site_name() {
  const url = 'https://pentest-apiworkspacemoph.one.th/api/v1/themes/public?site_name=MOPH';

  const params = {
    headers: {
      'Accept': 'application/json',
      // 'Authorization': `Bearer ${__ENV.TOKEN}`, // ถ้ามี token ให้เปิดใช้
    },
  };

  const res = http.get(url, params);

  // แสดง response status และ body
  // console.log('--- Response status: ' + res.status + ' ---');
  // console.log('--- Response body start ---');
  // console.log(res.body);
  // console.log('--- Response body end ---');

  return res;
}
