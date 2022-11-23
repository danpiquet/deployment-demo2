const btn = document.querySelector('button')
const btn2 = document.querySelector('#button2')

const clickHandler = () => alert('The dog name is: Rosco')

btn.addEventListener('click', clickHandler)

const getDog = () => {
    axios.get('http://ec2-35-92-127-22.us-west-2.compute.amazonaws.com/api/dog')
    .then(res => alert(res.data))
    .catch(err => console.log(err))
}

btn2.addEventListener('click',getDog)