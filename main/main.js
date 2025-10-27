//=============================== import API =================================
import { sleep } from 'k6';
import { error_check } from '../check/check.js';
import { scenario } from 'k6/execution';

import { showbusiness_moph } from '../api/showbusiness_moph.js';
import { showbusiness_moph_detail_by_business_id } from '../api/showbusiness_moph_detail_by_business_id.js';
import { advancedSearchjobs } from '../api/advancedSearchjobs.js';
import { get_recruitment_by_businessid } from '../api/get_recruitment_by_businessid.js';
import { get_recruitment_detail_by_recruitid } from '../api/get_recruitment_detail_by_recruitid.js';
import { get_topic_job_and_news } from '../api/get_topic_job_and_news.js';
import { get_news_by_businessid } from '../api/get_news_by_businessid.js';
import { get_news_detail_by_businessid_and_news_id } from '../api/get_news_detail_by_businessid_and_news_id.js';
import { get_topic_job_detail_by_topic_id } from '../api/get_topic_job_detail_by_topic_id.js';
import { get_theme_by_site_name } from '../api/get_theme_by_site_name.js';
import { insert_view_logs } from '../api/insert_view_logs.js';
import { hello } from '../api/hello.js';
import { check_db } from '../api/check_db.js';



//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  //response = showbusiness_moph()
  //response = showbusiness_moph_detail_by_business_id()
  //response = advancedSearchjobs()
  //response = get_recruitment_by_businessid()
  //response = get_recruitment_detail_by_recruitid()
  response = get_topic_job_and_news()
  //response = get_news_by_businessid()
  //response = get_news_detail_by_businessid_and_news_id()
  //response = get_topic_job_detail_by_topic_id()
  //response = get_theme_by_site_name()
  //response = insert_view_logs()
  //response = hello()
  //response = check_db()

  
  error_check(response);
  sleep(1)
}











































































const cid = __ENV.cid || "1";
const id = __ENV.id || "1";
const projectname = __ENV.projectname || "1";
const user = __ENV.user || "1";
const durationx = __ENV.durationx || "1";
let response;
const scenariox = __ENV.scenariox || "1";
let options;
const vusx = Math.ceil(user / durationx);
if (scenariox == 1) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
        gracefulStop: '120s',
      },
    },
  };
}
else if (scenariox == 2) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    vus: user,
    duration: durationx + 's',
    gracefulStop: '120s',
  };
}
else if (scenariox == 3) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    scenarios: {
      example_scenario: {
        executor: 'constant-arrival-rate',
        // rate: user,
        // timeUnit: durationx+'s',
        rate: vusx,
        timeUnit: '1s',
        preAllocatedVUs: user,
        duration: durationx + 's', // ระบุระยะเวลาที่ต้องการให้ทดสอบ
        gracefulStop: '120s',
      },
    },
  };
}
else {
  options = {
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
      },
    },
  };
}
export { options };