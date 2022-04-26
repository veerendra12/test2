// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Creates a client
const client = new language.LanguageServiceClient();

/**
 * TODO(developer): Uncomment the following line to run this code.
 */
const text = "Nice and light, good freedom of movement on MTB and no issues with sweating while riding. Quick drying. Variable fit with the Velcro tighteners at the sides. Lots of pocket space, so you don't need a back-pack if you've got just a few things to carry on your ride. Won't protect you from floor burns if you skid off, as not make from something like Kevlar, but then you're not paying the price for Kevlar shorts.";

// Prepares a document, representing the provided text
const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

async function run() {
	// Detects the sentiment of the document
	const [result] = await client.analyzeSentiment({document});

	const sentiment = result.documentSentiment;
	console.log('Document sentiment:');
	console.log(`  Score: ${sentiment.score}`);
	console.log(`  Magnitude: ${sentiment.magnitude}`);

	const sentences = result.sentences;
	sentences.forEach(sentence => {
	  console.log(`Sentence: ${sentence.text.content}`);
	  console.log(`  Score: ${sentence.sentiment.score}`);
	  console.log(`  Magnitude: ${sentence.sentiment.magnitude}`);
	});
}

run()


