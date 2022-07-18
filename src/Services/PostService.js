
import axios from "../axios";

class PostService{
    creatPost = async (data)=>{
        console.log("formData :"+data)
        const promise=new Promise((resolve,reject)=>{
            axios.post('posts,data')
                .then((res)=>{
                    return resolve(res)
                })
                .catch((er)=>{
                    console.log('error: '+er)
                    return resolve(er)
                })

        })
        return await promise
    }
}
export default new PostService();