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
		
        it('allFeeds feed URL are defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
            });
        });
  
          // Make sure all feeds have names (String), not empty
        
		 it('allFeeds feed name are defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
            });
        });
    });

  // Testing suite of Menu    
   describe('The menu', function() {
        //variable for selecting body element.
        const body = $('body');
        //variable for selecting menu icon (click event target).
        const menuIcon = $('.menu-icon-link');

        //Test ensures that menu is hidden by default.
        it('menu is hidden by clicked', function() {
            //on loading the web page, menu is hidden by default.
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
	
	
     // Make sure menu icon toggles hide/show on clicking
	it("the menu changes visibility by clicked", function () {
		menuIcon.click();
		  expect(body.hasClass('menu-hidden')).not.toBe(true);
		
		menuIcon.click();
		  expect(body.hasClass('menu-hidden')).toBe(true);
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

     //  the content changes when new feed is loaded 
	
	it("the content actually changes", function (done) {
		expect(initFeedSelection).not.toBe(newFeed);
		
		done();
	 });
   });     
}());

