# NeuroTTS

## What is NeuroTTS?

NeuroTTS is a TTS program which can able to synthesize Neuro-sama voice.  
Original TTS provider is `Azure TTS`.

## Quick start

### Download NeuroTTS

Goto [NeuroTTS Release Page](//github.com/SwarmToolkit/NeuroTTS/releases) to download the latest version of NeuroTTS.

### Get a API Key

You need to get a `Azure TTS API Key` before use this program.  
This is the tutorial of how to get a API Key.  
You need to prepare things follow this:

1. A PC with a good Internet connection.
2. A Credit Card to add payment method to `Azure`.

If you prepared, follow this step:

1. Goto [Azure](//azure.microsoft.com) and sign up for a account.
2. Goto [Azure TTS](//portal.azure.com/#view/Microsoft_Azure_ProjectOxford/CognitiveServicesHub/~/SpeechServices) to create your project.
3. Get your API Key and Endpoint.

Now you got the API Key, you can start NeuroTTS synthesize immediately.

### Have a try

Unzip the `NeuroTTS.zip` and run `NeuroTTS.exe`.  
When first start, it will ask for API Key. Enter correct Endpoint Region and API Key to continue.  
The automated API test will check your Endpoint Region and API Key correct.  
Then you will hear `Hello! I'm Neuro. Someone tell vedal there is a problem with my AI.` in Neuro voice, that means setup successfully.  
Now you can enjoy synthesize Neuro voice.

> [!WARNING]
> API test will request `Azure TTS` to synthesize audio, which means it will consuming API credits! Be aware of API usage.
