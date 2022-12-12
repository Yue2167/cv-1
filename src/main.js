let html = document.querySelector('#html');
let style = document.querySelector(`#style`);
let n = 0;
let string = `
/* 你好,我叫小月
接下来我来展示一下我的前端功底
首先我先准备一个div
 */
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我把div变成一个八卦圈
注意看哦
首先,把div变成一个圆 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
一黑一白 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%); 
}
/* 在这里加两个神秘的小球 */
#div1:before{
width:100px;
height:100px;
top:0;
left:50%;
transform:translate(-50%);
border-radius:50%;
background:#000;
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(247,247,247,1) 25%, rgba(10,10,10,1) 25%, rgba(0,0,0,1) 100%);

}
#div1:after{
width:100px;
height:100px;
bottom:0;
left:50%;
transform:translate(-50%);
border-radius:50%;
background:#fff;
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(29,29,29,1) 25%, rgba(245,245,245,1) 25%, rgba(255,255,255,1) 100%);

}
`;
let string2=''
console.log(string.length);

let step = () => {
    setTimeout(() => {
        n = n + 1;
        if (string[n] === `\n`) {
            //如果是回车 
            string2 += `<br>`;
        } else if (string[n] === ` `) {//&nbsp 再HTML里面是空格的意思
            string2+=`&nbsp;`
        } else {//如果不是回车就照抄
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 999999);
        html.scrollTo(0, 999999);
        if (n < string.length-1) {
            step();
        }
    }, 50);
    
};

 step();


