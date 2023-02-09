

export const fileUpload = async(file) => {
  
    if(!file) throw new Error('no tenemos ningun archivo a subir');
    const urlCloud='https://api.cloudinary.com/v1_1/dt6ditqzh/upload';

    const formdata=new FormData();
    formdata.append('upload_preset','react-journal');
    formdata.append('file',file);

    try {

        const data= await fetch(urlCloud,{
            method:'POST',
            body:formdata
        })

        //console.log(data);
        if (!data.ok) {
             throw new Error('no se envio la data');
        }

        const cloudResp=await data.json();
        //console.log({cloudResp});

        return cloudResp.secure_url;
        
    } catch (error) {

        throw new Error(error.message)
    }
}
