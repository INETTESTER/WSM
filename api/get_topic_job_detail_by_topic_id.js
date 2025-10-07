import http from 'k6/http';

export function get_topic_job_detail_by_topic_id() {
  const url = 'https://pentest-apiworkspacemoph.one.th/api/v1/recruitment/public/government_detail/382';

  const params = {
    headers: {
      'Accept': 'application/json',
      // 'Authorization': `Bearer ${__ENV.TOKEN}`, // ถ้ามี token ให้เปิดใช้
    },
  };

  const res = http.get(url, params);

  // แสดงผล response status และ body
  console.log('--- Response status: ' + res.status + ' ---');
  console.log('--- Response body start ---');
  console.log(res.body);
  console.log('--- Response body end ---');

  return res;
}
