/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "192.168.10.164"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		/*{
			module: "updatenotification",
			position: "top_bar"
		},*/
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Upcoming",
			position: "top_left",
			config: {
				maximumEntries: 6,
				maximumNumberOfDays: 30,
				fadePoint: 0.5,
				timeFormat: 'absolute',
				getRelative: 0,
				urgency: 0,
				hidePrivate: true,
				calendars: [
					{
						symbol: "calendar-check-o",
						url: "https://calendar.google.com/calendar/ical/timothy.watkins%40gmail.com/private-389682ddeac193b3ddb26680a983c33f/basic.ics"
					},
					{
						symbol: "users",
						url: "https://calendar.google.com/calendar/ical/3l3qdvdr9g5t3dqreves9t5io8%40group.calendar.google.com/private-d7f47cea03df18a51b731a1b1e2da263/basic.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "bottom_center"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				locationID: "5913490",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "9d828133b53d04bbd381198abf9015c3",
				units: "metric",
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				locationID: "5913490",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "9d828133b53d04bbd381198abf9015c3",
				units: "metric",
			}
		},
		{
			module: 'MMM-NHL',
			position: 'top_left',
			config: {
				focus_on: ['CGY'],
				datesToLookAhead: 30
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
