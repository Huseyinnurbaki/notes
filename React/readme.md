herhangi bir javascript sayfasından n window variable larına erişmek için örneğin webkitSpeechRecognition,
```javascript
window.webkitSpeechRecognition;
```
şeklinde tanımlamak gerekiyor. böylece bu variablelara erişebiliyoruz. 

aşağıdaki şekilde webkitspeechrecognitionı aktif hale getirebiliyoruz.


```javascript
initSpeechRecognition(){
var recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "tr-TR";
    recognition.onresult = function (event) {
        console.log(event)
    }
    recognition.start();
    }
```

output 
```log
SpeechRecognitionEvent {isTrusted: true, resultIndex: 0, results: SpeechRecognitionResultList, interpretation: null, emma: null, …}
isTrusted: true
resultIndex: 0
results: SpeechRecognitionResultList
length: 1
0: SpeechRecognitionResult
length: 1
isFinal: true
0: SpeechRecognitionAlternative
transcript: "Merhaba Merhaba Merhaba"
confidence: 0.9250525236129761
```