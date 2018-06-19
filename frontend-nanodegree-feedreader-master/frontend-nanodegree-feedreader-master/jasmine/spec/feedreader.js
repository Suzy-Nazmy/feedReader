/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
			// Make sure all feeds have a defined URL 
         it("allFeeds URL are defined", function() {
			
			allFeeds.each(function (feed) {
				expect(allFeeds.URL)toBeDefined();
			});
		});
  
          // Make sure all feeds have names (String), not empty
        
		it("allFeeds name are defined", function() {
			
			allFeeds.each(function (feed) {
				expect(allFeeds.name)toBeDefined();
			});
		});
  });

  // Testing suite of Menu    
  describe("the menu", function () {
 // Pre-define elements needed for testing hiding/showing of the menu
	const body = $("body"),
		  menuIcon = $(".menu-icon-link");
	
	it("menu element is hidden by default", function () {
		expect(body.className).toContain(".menu-hidden");
	});
	
	
     // Make sure menu icon toggles hide/show on clicking
	it("the menu changes visibility by clicked", function () {
		expect(body.hasClass("menu-hidden")).toggle();
	});
});

    // Testing suite of Initial Entries
describe("Initial Entries", function () {
	
	// Avoid duplicated setup
    // Before loading feed
	
	beforeEach(function (done) {
		loadFeed(0, function () {
			
			done();
		});
	});
	
      // Load "loadFeed" function is called and completes it, and there
     // should at least 1 .entry element in the .feed contianer
	
	it("there is a single entry at least after the loadFeed function is called", function (done) {
		var numEntries = $('.feed .entry').length;
		expect(numEntries).toBeGreaterThan(0)
		done();
	});
});
    
	// Testing suite of New Feed Selection

describe("New Feed Selection", function () {
	
	// Avoid duplicated setup
    // Initial loaded feed setup
	
	var initFeedSelection,
            newFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                initFeedSelection = $('.feed').html();
                loadFeed(1, function() {
                    newFeed = $('.feed').html();
                    done();
                });
            });
        });

     // Make sure when new feed is loaded using loadFeed function,
    // the content changes
	
	it("the content actually changes", function (done) {
		expect(initFeedSelection).not.toBe(newFeed);
		
		done();
	 });
   });     
}());
