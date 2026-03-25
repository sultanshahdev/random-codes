from faster_whisper import WhisperModel

model = WhisperModel("small", device="cpu", compute_type="int8")

segments, info = model.transcribe("example.mp3")

print("Detected language:", info.language)

print("\nTranscript:")
for segment in segments:
    print(segment.text)
    
