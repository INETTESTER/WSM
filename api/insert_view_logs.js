import http from 'k6/http';

export function insert_view_logs() {
  const url = 'https://pentest-apiworkspacemoph.one.th/api/v1/log_manager/view_logs';

  const payload = JSON.stringify({
    "from_refcode": null,
    "page_name": "landing_page",
    "path": "/",
    "query_params": {},
    "ref_category": null,
    "ref_category_value": null,
    "ref_account_id": null,
    "ref_username": null,
    "ref_site": "MOPH",
    "token": null
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${__ENV.TOKEN}`, // ถ้ามี token ให้เปิดคอมเมนต์และตั้ง __ENV.TOKEN
    },
  };

  const res = http.post(url, payload, params);

  // Log response status และ body
  console.log('--- Response status: ' + res.status + ' ---');
  console.log('--- Response body start ---');
  console.log(res.body);
  console.log('--- Response body end ---');

  return res;
}
