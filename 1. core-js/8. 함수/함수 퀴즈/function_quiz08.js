/*
        1. 키(cm)와 몸무게(kg)을 인수로 전달받아 
        
        2. bmi지수를 계산하여 반환함과 동시에 

        3. bmi가 25.0이상이면 "당신은 과체중입니다." 
        18.5이하면 "당신은 저체중입니다." 
        나머지는 "당신은 정상체중입니다."를 출력하는 
        calcBMI라는 함수를 정의하고 호출하세요. 
        
        4. 체중범위 출력은 함수 내부에서 작성되어야 합니다. 

        # bmi 계산식 : 몸무게(kg) / (키(m) * 키(m)) 
       
        - 호출 예시 : calcBMI(178.4, 78.2);
    
        - 출력 예시:
            키 -> 1.784cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"
*/

function calcBmi(height, weight){

    height *= 0.01
    var bmi = weight / (height * height);
    bmi = Math.floor(bmi*100)/100;

    if (bmi >= 25.0) {
        console.log(`당신은 과체중입니다.`);
    } else if (bmi >18.5) {
        console.log(`당신은 정상체중입니다.`);
    } else {
        console.log(`당신은 저체중입니다.`);
    }
 
    return {
        height: `${height*= 100}cm`,
        weight: `${weight}kg`,
        bmi
    };
}

var result = calcBmi(160, 48);
console.log(`키 -> ${result.height}, 체중 -> ${result.weight}의 체질량지수는: ${result.bmi}입니다.`);
