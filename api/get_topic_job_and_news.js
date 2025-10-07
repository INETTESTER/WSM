import http from 'k6/http';

export function get_topic_job_and_news() {
  const url = 'https://pentest-apiworkspacemoph.one.th/api/v1/business/public/business-news-and-job-topic?search=&page=1&limit_per_page=10&sort_by=latest_publish&provider_type=providerID';

  const params = {
    headers: {
      'Accept': 'application/json',
      // 'Authorization': `Bearer ${__ENV.TOKEN}`, // ถ้ามี token ให้เปิดใช้ได้
    },
  };

  const res = http.get(url, params);

  // แสดงผลลัพธ์ (log)
  console.log('--- Response status: ' + res.status + ' ---');
  console.log('--- Response body start ---');
  console.log(res.body);
  console.log('--- Response body end ---');

  return res;
}
