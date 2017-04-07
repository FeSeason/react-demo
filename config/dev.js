console.log("当前为: "+ process.env.NODE_ENV +" 环境")
if( process.env.NODE_ENV === 'production' ){
    // 生产环境
    global.API = ''
}else{
    // 开发环境
    global.API = '/proxy'
}