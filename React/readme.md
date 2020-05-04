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


-----

## Bootstrap paste after clear does not trigger onchange

onchange yerine onInput kullanıdm.

örnek

```javascript
import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const BigTextInput = (props) => {
    return (
        <Col>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className='BigTextInputLabel' >{props.label}</Form.Label>
                <Form.Control
                {...props}
                as="textarea"
                rows="6"
                onInput={props.onChange}
                value={props.disabled ? props.value : undefined}
                />
            </Form.Group>
        </Col>
    );
};

export default BigTextInput;
```

## Eslint & Prettier

very good explanation
https://thomlom.dev/setup-eslint-prettier-react/


----

## scroll to top

window.scrollTo(0, 0)


## Sticky div css

position: 'fixed'
