alert("ワンコくじへようこそ！");

function kuji(){

    var dogsArray = ["ゴールデン・レトリバー", "トイ・プードル", "シベリアン・ハスキー", "チワワ", "ミニチュア・ダックスフンド", "ポメラニアン", "柴犬", "フレンチ・ブルドッグ", "ジャーマンシェパード", "ミックス犬"];
  
    var rnd = Math.floor(Math.random() * dogsArray.length);
    console.log(rnd);

    if(rnd == 0){
        result = dogsArray[0]
    }else if(rnd == 1){
        result = dogsArray[1];
    }else if(rnd == 2){
        result = dogsArray[2]
    }else if(rnd == 3){
        result = dogsArray[3]
    }else if(rnd == 4){
        result = dogsArray[4]
    }else if(rnd == 5){
        result = dogsArray[5]
    }else if(rnd == 6){
        result = dogsArray[6]
    }else if(rnd == 7){
        result = dogsArray[7]
    }else if(rnd == 8){
        result = dogsArray[8]
    }else if(rnd == 9){
        result = dogsArray[9]
    }
    
    document.getElementById("message").innerHTML = 'あなたにおすすめの犬種は' + result + 'です';

}
