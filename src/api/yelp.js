import axios from "axios";

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses'
  headers: {
    Authorization: 'Bearer ScolnSvKEa5WOChrHAVXTbrFsk-FsLgiOnnGwaxIYTswUf_A5ZhNt2IGHUs74udlNqJLDU0_EufE6k-wmfkmvA9sZlA-9RbkgHxSU5J_jWGLXxWtQptWhXNL1qOiY3Yx'

  }
});


