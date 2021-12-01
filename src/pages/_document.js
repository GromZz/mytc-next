import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta charSet='UTF-8' />
					<meta httpEquiv='content-type' content='text/html' />
					<meta
						name='description'
						content='Simple event calendar for creating, managing, and searching events.'
					/>
					<meta
						name='keywords'
						content='mytc, calendar, events, event-calendar, time, time-management, weekend, holiday'
					/>
					<meta name='author' content='Vlad Tarasenko' />
					<meta name='owner' content='Vlad Tarasenkoa' />
					<meta name='copyright' content='Vlad Tarasenko' />
					<meta name='designer' content='Vlad Tarasenko' />
					<meta name='reply-to' content='vladik.tarasenko2002@ukr.net' />
					<meta name='distribution' content='global' />
					<meta name='subject' content='Event calendar' />
					<meta name='language' content='EN, RU, UK, HU, DE' />
					<meta name='coverage' content='worldwide' />
					<meta name='rating' content='general' />
					<meta name='robots' content='all' />
					<meta name='googlebot' content='all' />
					<meta name='googlebot-news' content='all' />
					<meta name='revisit-after' content='1 day' />
					<meta httpEquiv='pragma' content='no-cache' />
					<meta httpEquiv='cache-control' content='no-cache' />
					<meta name='theme-color' content='#7c6aef' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
