const apiKey = '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'

const url = 'https://api.openai.com/v1/chat/completions'

fetch(url,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'OpenAI-Organization':'org-Tr3CsmfGigPgeKyLaJMtbFxK'
    },
    body: JSON.stringify({
        'model':'text-davinci-003',
        'prompt': 'What is the capital of Spain?'
    })
})
.then(response => response.json())
.then(data => console.log(data))
