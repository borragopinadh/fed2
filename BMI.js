import React,{useState} from 'react';
function BMI(){
    const[height,setHeight]=useState(0);
    const[weight,setWeight]=useState(0);
    const[name,setName]=useState("")
    const calculatorBMI=()=>{
        var heightsquared=(height/100 * height/100);
        var bmi=weight/heightsquared;
        if (bmi<16){
            window.alert("Hi.."+name+"..Your are severe thiness");
        }
        else if(bmi>=16 && bmi<17){
            window.alert("hi.."+name+" you r moderate thiness");
        }
        else if(bmi>=17 && bmi<18.5){
            window.alert("hi..."+name+"...you are little thinness");
        }
        else if(bmi>=18.5 && bmi<=24.99){
            window.alert("hi.."+name+"..you are in a healthy weight range");
        }
        else if(bmi>=25 &&bmi<=27.9){
            window.alert("Hi.."+name+"..you are overweight");
        }
        bmi=Math.round(bmi*100)/100;
    }
    const submitMe=(e)=>{
        e.preventDefault();
        calculatorBMI();
    }
    const handleName=(e)=>{
        setName(e.target.value);
    }
    const handleHeight=(e)=>{
        setHeight(e.target.value);
    }
    const handleWeight=(e)=>{
        setWeight(e.target.value);
    }
    return(
        <div>
            <h1>
                BMI clauclator
            </h1>
            <form onSubmit={submitMe}>
                <label>
                    please enter your name
                </label>
                <input type="text" name="name" value={name} onChange={handleName}/>
                <br>
                </br>
                <label>
                    please enter your height
                </label>
                
                <input type="text" name="height" value={height} onChange={handleHeight}/>
                <br>
                </br>
                <label>
                    please enter your weight
                </label>
                <input type="text" name="height" value={weight} onChange={handleWeight}/>
                <br>
                </br>
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
}
export default BMI;