export const statsConstant = {
	STATS: {
		ERROR: {
			message_1: 'There is a problem connecting to the API.',
			message_2: 'Please wait a moment and try again.'
		},
		ROW_1: [
		{
			title: 'Market Price USD',
			value: null,
			error: 'errorMessage_price',
			errorMessage_1: 'There is a problem connecting to the API.',
			errorMessage_2: 'Please wait a moment and try again.',
			subtitle: 'Average USD market price across major bitcoin exchanges',
			symbol: 'USD'
		},
		{
			title: 'Average Block Size',
			value: null,
			error: 'errorMessage_size',
			errorMessage_1: 'There is a problem connecting to the API.',
			errorMessage_2: 'Please wait a moment and try again.',
			subtitle: 'The 24 hour average block size in MB.',
			symbol: 'Megabytes'
		}
		],
		ROW_2: [
		{
			title: 'Transactions per Day',
			subtitle: 'The aggregate number of confirmed Bitcoin transactions in the past 24 hours.'
		},
		{
			title: 'Mempool Size',
			subtitle: 'The aggregate size of transactions waiting to be confirmed.'
		}
		]
	}
}