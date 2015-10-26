$(document).ready(function() {

	function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
	    }
	}

	preloadImages([
		"images/000_open_close.jpg",
		"images/001_heal_kill.jpg",
		"images/002_run_hide.jpg",
		"images/003_peel_rip.jpg",
		"images/004_bury_cremate.jpg",
		"images/005_trip_train.jpg",
		"images/006_speak_swallow.jpg",
		"images/007_look-away_look-up.jpg",
		"images/008_rebrand_relocate.jpg",
		"images/009_cultivate_pave.jpg",
		"images/010_improve_worsen.jpg",
		"images/011_store_sell.jpg",
		"images/012_replace_recontextualize.jpg",
		"images/013_censor_debate.jpg",
		"images/014_rotate_remove.jpg",
		"images/015_restore-sight_heighten-hearing.jpg",
		"images/016_pursue_lose-interest.jpg",
		"images/017_use_abuse.jpg",
		"images/018_pan_cut.jpg",
		"images/019_genetically-modify_certify-organic.jpg",
		"images/020_wait_leave.jpg",
		"images/021_renew_cancel.jpg",
		"images/022_fast-forward_rewind.jpg",
		"images/023_simplify_elaborate.jpg",
		"images/024_fluff_punch.jpg",
		"images/025_disqualify_sponsor.jpg",
		"images/026_go-to-jessie_go-to-bus-station.jpg",
		"images/027_give-fight_give-in.jpg",
		"images/028_agree_agree-to-disagree.jpg",
		"images/029_approach_launch.jpg",
		"images/030_hatch_throw.jpg",
		"images/032_tune-out_tune-in.jpg",
		"images/033_go-to-police_go-to-hostel.jpg",
		"images/034_distill_dissolve.jpg",
		"images/035_brush_floss.jpg",
		"images/036_compare_contrast.jpg",
		"images/037_locate_isolate.jpg",
		"images/038_post_paste.jpg",
		"images/039_profit_protest.jpg",
		"images/040_buy_steal.jpg",
		"images/041_espouse-dualism_espouse-materialism.jpg",
		"images/042_fly_flounder.jpg",
		"images/043_bite_lick.jpg",
		"images/044_publish_punish.jpg",
		"images/045_zoom-in_zoom-out.jpg",
		"images/046_rock_sing.jpg",
		"images/047_think-Douglas_think-Douglass.jpg",
		"images/048_tear-down_flare-up.jpg",
		"images/049_abstract_concretize.jpg",
		"images/050_squeeze_spike.jpg",
		"images/051_get-a-job_get-even.jpg",
		"images/052_add-value_subtract-value.jpg",
		"images/053_start-again_say-goodbye.jpg",
		"images/054_end-like-a-movie_end-like-a-book.jpg",
		"images/055_face-it_fuck-it.jpg",
		"images/056_be-positive_be-negative.jpg",
		"images/057_get-busy_look-busy.jpg",
		"images/058_go-to-work_go-to-therapy.jpg",
		"images/059_confront_concede.jpg",
		"images/060_lament_laminate.jpg",
		"images/061_consume_subsume.jpg",
		"images/062_rhyme_reason.jpg",
		"images/063.jpg",
		"images/064.jpg",
		"images/065.jpg",
		"images/066.jpg",
		"images/067.jpg",
		"images/068.jpg",
		"images/069.jpg",
		"images/070.jpg",
		"images/071.jpg",
		"images/072.jpg",
		"images/073.jpg",
		"images/074.jpg",
		"images/075.jpg",
		"images/076.jpg",
		"images/077.jpg",
		"images/078.jpg",
		"images/079.jpg",
		"images/080.jpg",
		"images/081.jpg",
		"images/082.jpg",
		"images/083.jpg",
		"images/084.jpg",
		"images/085.jpg",
		"images/086.jpg",
		"images/087.jpg",
		"images/088.jpg",
		"images/089.jpg",
		"images/090.jpg",
		"images/091.jpg",
		"images/092.jpg",
		"images/093.jpg",
		"images/094.jpg",
		"images/095.jpg",
		"images/096.jpg",
		"images/097.jpg",
		"images/098.jpg",
		"images/099.jpg",
		"images/100.jpg",
		"images/101.jpg",
		"images/102.jpg",
		"images/103.jpg",
		"images/104.jpg",
		"images/105.jpg",
		"images/106.jpg",
		"images/107.jpg",
		"images/108.jpg",
		"images/109.jpg",
		"images/110.jpg",
		"images/111.jpg",
		"images/112.jpg",
		"images/113.jpg",
		"images/114.jpg",
		"images/115.jpg",
		"images/116.jpg",
		"images/117.jpg",
		"images/118.jpg",
		"images/119.jpg",
		"images/120.jpg",
		"images/121.jpg",
		"images/122.jpg",
		"images/123.jpg",
		"images/124.jpg",
		"images/125.jpg",
		"images/126.jpg"

	]);


	// make index (or zero) the starting place for targets
	var current_page = 0;

	$(document).ready(function () {

	    load_index(0);

	    $('#response').on('click', '.choice', function () {
	        var target = $(this).data('target');
	        load_index(target);
	    });

	    // $('.choice:first-child').prepend('<img src="images/nav/previous.svg" />');
	});

	function load_index(id) {

	    // Fetch JSON for page data associated with given ID

	    var page_data = CHOOSE[id];

	    clear_page();

	    set_page_text(page_data.text);
	    set_page_image(page_data.images);

	    if (page_data.type === 'choice') {
	        for (var choice in page_data.choices) {
	            var choice_data = page_data.choices[choice];
	            add_choice(choice_data.text, choice_data.target, choice_data.images);
	        }
	    }
	}

	function set_page_text(text) {
	    $("#page_text").append("<p>" + text + "</p>");
	}

	function set_page_image(images) {

	    $("#page_text").append("<img src=" + images + ">");
	}

	function add_choice(text, target, images) {
	    $("#response").append("<div class=choice data-target=" + target + ">" + text + "</div>");
	}

	function clear_page() {
	    $("#page_text").empty();
	    $("#response").empty();
	}

	function getRandomInt(min, max) {
		x = Math.floor(Math.random() * (max - min + 1)) + min;
	}
	window.onload = getRandomInt;
	// function loadImages(imgArr, targetId){
	//     for(var i=0; i< imgArr.length; i++) {
	//         console.log(imgArr[i]);
	//         var img = new Image();
	//             img.src = imgArr[i];
	//         document.getElementById('output').appendChild(img);
	//     }
	// }

	// loadImages(images);

	var CHOOSE = [
		
		// landing page

		{
			'images': 'images/000_open_close.jpg',
			'text': '0',
	        'type': 'choice',
	        'choices': [{
		        'text': 'open',
		            'target': 1
		    }, {
		        'text': 'close',
		            'target': 2
		    }]

		}, 

		{
			'images': 'images/001_heal_kill.jpg',
		    'text': '1',
		        'type': 'choice',
		        'choices': [{
		        'text': 'heal',
		            'target': 3
		    }, {
		        'text': 'kill',
		            'target': 4
		    }]
		}, 

		{
			'images': 'images/002_run_hide.jpg',
		    'text': '2',
		        'type': 'choice',
		        'choices': [{
		        'text': 'run',
		            'target': 5
		    }, {
		        'text': 'hide',
		            'target': 6
		    }]
		}, 

		{
			'images': 'images/003_peel_rip.jpg',
		    'text': '3',
		        'type': 'choice',
		        'choices': [{
		        'text': 'peel',
		            'target': 7
		    }, {
		        'text': 'rip',
		            'target': 8
		    }]
		},

		{
			'images': 'images/004_bury_cremate.jpg',
		    'text': '4',
		        'type': 'choice',
		        'choices': [{
		        'text': 'bury',
		            'target': 9
		    }, {
		        'text': 'cremate',
		            'target': 10
		    }]
		},

		{
			'images': 'images/005_trip_train.jpg',
		    'text': '5',
		        'type': 'choice',
		        'choices': [{
		        'text': 'trip',
		            'target': 11
		    }, {
		        'text': 'train',
		            'target': 12
		    }]
		},

		{
			'images': 'images/006_speak_swallow.jpg',
		    'text': '6',
		        'type': 'choice',
		        'choices': [{
		        'text': 'speak',
		            'target': 13
		    }, {
		        'text': 'swallow',
		            'target': 14
		    }]
		},

		{
			'images': 'images/007_look-away_look-up.jpg',
		    'text': '7',
		        'type': 'choice',
		        'choices': [{
		        'text': 'look away',
		            'target': 15
		    }, {
		        'text': 'look up',
		            'target': 16
		    }]
		},

		{
			'images': 'images/008_rebrand_relocate.jpg',
		    'text': '8',
		        'type': 'choice',
		        'choices': [{
		        'text': 'rebrand',
		            'target': 17
		    }, {
		        'text': 'relocate',
		            'target': 18
		    }]
		},

		{
			'images': 'images/009_cultivate_pave.jpg',
		    'text': '9',
		        'type': 'choice',
		        'choices': [{
		        'text': 'cultivate',
		            'target': 19
		    }, {
		        'text': 'pave',
		            'target': 20
		    }]
		},

		{
			'images': 'images/010_improve_worsen.jpg',
		    'text': '10',
		        'type': 'choice',
		        'choices': [{
		        'text': 'improve',
		            'target': 21
		    }, {
		        'text': 'worsen',
		            'target': 22
		    }]
		},

		{
			'images': 'images/011_store_sell.jpg',
		    'text': '11',
		        'type': 'choice',
		        'choices': [{
		        'text': 'store',
		            'target': 23
		    }, {
		        'text': 'sell',
		            'target': 24
		    }]
		},

		{
			'images': 'images/012_replace_recontextualize.jpg',
		    'text': '12',
		        'type': 'choice',
		        'choices': [{
		        'text': 'replace',
		            'target': 25
		    }, {
		        'text': 'recontextualize',
		            'target': 26
		    }]
		},

		{
			'images': 'images/013_censor_debate.jpg',
		    'text': '13',
		        'type': 'choice',
		        'choices': [{
		        'text': 'censor',
		            'target': 27
		    }, {
		        'text': 'debate',
		            'target': 28
		    }]
		},

		{
			'images': 'images/014_rotate_remove.jpg',
		    'text': '14',
		        'type': 'choice',
		        'choices': [{
		        'text': 'rotate',
		            'target': 29
		    }, {
		        'text': 'remove',
		            'target': 30
		    }]
		},

		{
			'images': 'images/015_restore-sight_heighten-hearing.jpg',
		    'text': '15',
		        'type': 'choice',
		        'choices': [{
		        'text': 'restore sight',
		            'target': 31
		    }, {
		        'text': 'heighten hearing',
		            'target': 32
		    }]
		},

		{
			'images': 'images/016_pursue_lose-interest.jpg',
		    'text': '16',
		        'type': 'choice',
		        'choices': [{
		        'text': 'pursue',
		            'target': 33
		    }, {
		        'text': 'lose interest',
		            'target': 34
		    }]
		},

		{
			'images': 'images/017_use_abuse.jpg',
		    'text': '17',
		        'type': 'choice',
		        'choices': [{
		        'text': 'use',
		            'target': 35
		    }, {
		        'text': 'abuse',
		            'target': 36
		    }]
		},

		{
			'images': 'images/018_pan_cut.jpg',
		    'text': '18',
		        'type': 'choice',
		        'choices': [{
		        'text': 'pan',
		            'target': 37
		    }, {
		        'text': 'cut',
		            'target': 38
		    }]
		},

		{
			'images': 'images/019_genetically-modify_certify-organic.jpg',
		    'text': '19',
		        'type': 'choice',
		        'choices': [{
		        'text': 'genetically modify',
		            'target': 39
		    }, {
		        'text': 'certify organic',
		            'target': 40
		    }]
		},

		{
			'images': 'images/020_wait_leave.jpg',
		    'text': '20',
		        'type': 'choice',
		        'choices': [{
		        'text': 'wait',
		            'target': 41
		    }, {
		        'text': 'leave',
		            'target': 42
		    }]
		},

		{
			'images': 'images/021_renew_cancel.jpg',
		    'text': '21',
		        'type': 'choice',
		        'choices': [{
		        'text': 'renew',
		            'target': 43
		    }, {
		        'text': 'cancel',
		            'target': 44
		    }]
		},

		{
			'images': 'images/022_fast-forward_rewind.jpg',
		    'text': '22',
		        'type': 'choice',
		        'choices': [{
		        'text': 'fast forward',
		            'target': 45
		    }, {
		        'text': 'rewind',
		            'target': 46
		    }]
		},

		{
			'images': 'images/023_simplify_elaborate.jpg',
		    'text': '23',
		        'type': 'choice',
		        'choices': [{
		        'text': 'simplify',
		            'target': 47
		    }, {
		        'text': 'elaborate',
		            'target': 48
		    }]
		},

		{
			'images': 'images/024_fluff_punch.jpg',
		    'text': '24',
		        'type': 'choice',
		        'choices': [{
		        'text': 'fluff',
		            'target': 49
		    }, {
		        'text': 'punch',
		            'target': 50
		    }]
		},

		{
			'images': 'images/025_disqualify_sponsor.jpg',
		    'text': '25',
		        'type': 'choice',
		        'choices': [{
		        'text': 'disqualify',
		            'target': 51
		    }, {
		        'text': 'sponsor',
		            'target': 52
		    }]
		},

		{
			'images': 'images/026_go-to-jessie_go-to-bus-station.jpg',
		    'text': '26',
		        'type': 'choice',
		        'choices': [{
		        'text': 'go to jessie',
		            'target': 53
		    }, {
		        'text': 'go to bus station',
		            'target': 54
		    }]
		},

		{
			'images': 'images/027_give-fight_give-in.jpg',
		    'text': '27',
		        'type': 'choice',
		        'choices': [{
		        'text': 'give fight',
		            'target': 55
		    }, {
		        'text': 'give in',
		            'target': 56
		    }]
		},

		{
			'images': 'images/028_agree_agree-to-disagree.jpg',
		    'text': '28',
		        'type': 'choice',
		        'choices': [{
		        'text': 'agree',
		            'target': 57
		    }, {
		        'text': 'agree to disagree',
		            'target': 58
		    }]
		},

		{
			'images': 'images/029_approach_launch.jpg',
		    'text': '29',
		        'type': 'choice',
		        'choices': [{
		        'text': 'approach',
		            'target': 59
		    }, {
		        'text': 'launch',
		            'target': 60
		    }]
		},

		{
			'images': 'images/030_hatch_throw.jpg',
		    'text': '30',
		        'type': 'choice',
		        'choices': [{
		        'text': 'hatch',
		            'target': 61
		    }, {
		        'text': 'throw',
		            'target': 62
		    }]
		},

		{
			'images': 'images/031_pair_pare.jpg',
		    'text': '31',
		        'type': 'choice',
		        'choices': [{
		        'text': 'pair',
		            'target': 63
		    }, {
		        'text': 'pare',
		            'target': 64
		    }]
		},

		{
			'images': 'images/032_tune-out_tune-in.jpg',
		    'text': '32',
		        'type': 'choice',
		        'choices': [{
		        'text': 'tune in',
		            'target': 65
		    }, {
		        'text': 'tune out',
		            'target': 66
		    }]
		},

		{
			'images': 'images/033_go-to-police_go-to-hostel.jpg',
		    'text': '33',
		        'type': 'choice',
		        'choices': [{
		        'text': 'go to police',
		            'target': 67
		    }, {
		        'text': 'go to hostel',
		            'target': 68
		    }]
		},

		{
			'images': 'images/034_distill_dissolve.jpg',
		    'text': '34',
		        'type': 'choice',
		        'choices': [{
		        'text': 'distill',
		            'target': 69
		    }, {
		        'text': 'dissolve',
		            'target': 70
		    }]
		},

		{
			'images': 'images/035_brush_floss.jpg',
		    'text': '35',
		        'type': 'choice',
		        'choices': [{
		        'text': 'brush',
		            'target': 71
		    }, {
		        'text': 'floss',
		            'target': 72
		    }]
		},

			{
			'images': 'images/036_compare_contrast.jpg',
		    'text': '36',
		        'type': 'choice',
		        'choices': [{
		        'text': 'compare',
		            'target': 73
		    }, {
		        'text': 'contrast',
		            'target': 74
		    }]
		},

		{
			'images': 'images/037_locate_isolate.jpg',
		    'text': '37',
		        'type': 'choice',
		        'choices': [{
		        'text': 'locate',
		            'target': 75
		    }, {
		        'text': 'isolate',
		            'target': 76
		    }]
		},

		{
			'images': 'images/038_post_paste.jpg',
		    'text': '38',
		        'type': 'choice',
		        'choices': [{
		        'text': 'post',
		            'target': 77
		    }, {
		        'text': 'paste',
		            'target': 78
		    }]
		},

		{
			'images': 'images/039_profit_protest.jpg',
		    'text': '39',
		        'type': 'choice',
		        'choices': [{
		        'text': 'profit',
		            'target': 79
		    }, {
		        'text': 'protest',
		            'target': 80
		    }]
		
		},

		{
			'images': 'images/040_buy_steal.jpg',
		    'text': '40',
		        'type': 'choice',
		        'choices': [{
		        'text': 'buy',
		            'target': 81
		    }, {
		        'text': 'steal',
		            'target': 82
		    }]
		
		},

		{
			'images': 'images/041_espouse-dualism_espouse-materialism.jpg',
		    'text': '41',
		        'type': 'choice',
		        'choices': [{
		        'text': 'espouse dualism',
		            'target': 83
		    }, {
		        'text': 'espouse materialism',
		            'target': 84
		    }]
		
		},

		{
			'images': 'images/042_fly_flounder.jpg',
		    'text': '42',
		        'type': 'choice',
		        'choices': [{
		        'text': 'fly',
		            'target': 85
		    }, {
		        'text': 'flounder',
		            'target': 86
		    }]
		
		},

		{
			'images': 'images/043_bite_lick.jpg',
		    'text': '43',
		        'type': 'choice',
		        'choices': [{
		        'text': 'bite',
		            'target': 87
		    }, {
		        'text': 'lick',
		            'target': 88
		    }]
		
		},

		{
			'images': 'images/044_publish_punish.jpg',
		    'text': '44',
		        'type': 'choice',
		        'choices': [{
		        'text': 'publish',
		            'target': 89
		    }, {
		        'text': 'punish',
		            'target': 90
		    }]
		
		},

		{
			'images': 'images/045_zoom-in_zoom-out.jpg',
		    'text': '45',
		        'type': 'choice',
		        'choices': [{
		        'text': 'zoom in',
		            'target': 91
		    }, {
		        'text': 'zoom out',
		            'target': 92
		    }]
		
		},

		{
			'images': 'images/046_rock_sing.jpg',
		    'text': '46',
		        'type': 'choice',
		        'choices': [{
		        'text': 'rock',
		            'target': 93
		    }, {
		        'text': 'sing',
		            'target': 94
		    }]
		
		},

		{
			'images': 'images/047_think-Douglas_think-Douglass.jpg',
		    'text': '47',
		        'type': 'choice',
		        'choices': [{
		        'text': 'think Douglass',
		            'target': 95
		    }, {
		        'text': 'think Douglas',
		            'target': 96
		    }]
		
		},

		{
			'images': 'images/048_tear-down_flare-up.jpg',
		    'text': '48',
		        'type': 'choice',
		        'choices': [{
		        'text': 'tear down',
		            'target': 97
		    }, {
		        'text': 'flare up',
		            'target': 98
		    }]
		
		},

		{
			'images': 'images/049_abstract_concretize.jpg',
		    'text': '49',
		        'type': 'choice',
		        'choices': [{
		        'text': 'abstract',
		            'target': 99
		    }, {
		        'text': 'concretize',
		            'target': 100
		    }]
		
		},

		{
			'images': 'images/050_squeeze_spike.jpg',
		    'text': '50',
		        'type': 'choice',
		        'choices': [{
		        'text': 'squeeze',
		            'target': 101
		    }, {
		        'text': 'spike',
		            'target': 102
		    }]
		
		},

		{
			'images': 'images/051_get-a-job_get-even.jpg',
		    'text': '51',
		        'type': 'choice',
		        'choices': [{
		        'text': 'get a job',
		            'target': 103
		    }, {
		        'text': 'get even',
		            'target': 104
		    }]
		
		},

		{
			'images': 'images/052_add-value_subtract-value.jpg',
		    'text': '52',
		        'type': 'choice',
		        'choices': [{
		        'text': 'get a job',
		            'target': 105
		    }, {
		        'text': 'get even',
		            'target': 106
		    }]
		
		},

		{
			'images': 'images/053_start-again_say-goodbye.jpg',
		    'text': '53',
		        'type': 'choice',
		        'choices': [{
		        'text': 'start again',
		            'target': 107
		    }, {
		        'text': 'say goodbye',
		            'target': 108
		    }]
		
		},

		{
			'images': 'images/054_end-like-a-movie_end-like-a-book.jpg',
		    'text': '54',
		        'type': 'choice',
		        'choices': [{
		        'text': 'end like a movie',
		            'target': 109
		    }, {
		        'text': 'end like a book',
		            'target': 110
		    }]
		
		},

		{
			'images': 'images/055_face-it_fuck-it.jpg',
		    'text': '55',
		        'type': 'choice',
		        'choices': [{
		        'text': 'face it',
		            'target': 111
		    }, {
		        'text': 'fuck it',
		            'target': 112
		    }]
		
		},

		{
			'images': 'images/056_be-positive_be-negative.jpg',
		    'text': '56',
		        'type': 'choice',
		        'choices': [{
		        'text': 'be positive',
		            'target': 113
		    }, {
		        'text': 'be negative',
		            'target': 114
		    }]
		
		},

		{
			'images': 'images/057_get-busy_look-busy.jpg',
		    'text': '57',
		        'type': 'choice',
		        'choices': [{
		        'text': 'get busy',
		            'target': 115
		    }, {
		        'text': 'look busy',
		            'target': 116
		    }]
		
		},

		{
			'images': 'images/058_go-to-work_go-to-therapy.jpg',
		    'text': '58',
		        'type': 'choice',
		        'choices': [{
		        'text': 'go to work',
		            'target': 117
		    }, {
		        'text': 'go to therapy',
		            'target': 118
		    }]
		
		},

		{
			'images': 'images/059_confront_concede.jpg',
		    'text': '59',
		        'type': 'choice',
		        'choices': [{
		        'text': 'concede',
		            'target': 119
		    }, {
		        'text': 'confront',
		            'target': 120
		    }]
		
		},

		{
			'images': 'images/060_lament_laminate.jpg',
		    'text': '60',
		        'type': 'choice',
		        'choices': [{
		        'text': 'lament',
		            'target': 121
		    }, {
		        'text': 'laminate',
		            'target': 122
		    }]
		
		},

		{
			'images': 'images/061_consume_subsume.jpg',
		    'text': '61',
		        'type': 'choice',
		        'choices': [{
		        'text': 'consume',
		            'target': 123
		    }, {
		        'text': 'subsume',
		            'target': 124
		    }]
		
		},

			{
			'images': 'images/062_rhyme_reason.jpg',
		    'text': '62',
		        'type': 'choice',
		        'choices': [{
		        'text': 'rhyme',
		            'target': 125
		    }, {
		        'text': 'reason',
		            'target': 126
		    }]
		
		},

		{
			'images': 'images/063.jpg',
		    'text': '63',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/064.jpg',
		    'text': '64',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/065.jpg',
		    'text': '65',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/066.jpg',
		    'text': '66',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/067.jpg',
		    'text': '67',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/068.jpg',
		    'text': '68',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/069.jpg',
		    'text': '69',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/070.jpg',
		    'text': '70',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/071.jpg',
		    'text': '71',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/072.jpg',
		    'text': '72',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/073.jpg',
		    'text': '73',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/074.jpg',
		    'text': '74',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/075.jpg',
		    'text': '75',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/076.jpg',
		    'text': '76',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/077.jpg',
		    'text': '77',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/078.jpg',
		    'text': '78',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/079.jpg',
		    'text': '79',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/080.jpg',
		    'text': '80',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/081.jpg',
		    'text': '81',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/082.jpg',
		    'text': '82',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/083.jpg',
		    'text': '83',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/084.jpg',
		    'text': '84',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/085.jpg',
		    'text': '85',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/086.jpg',
		    'text': '86',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/087.jpg',
		    'text': '87',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/088.jpg',
		    'text': '88',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/089.jpg',
		    'text': '89',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/090.jpg',
		    'text': '90',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/091.jpg',
		    'text': '91',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/092.jpg',
		    'text': '92',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/093.jpg',
		    'text': '93',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/094.jpg',
		    'text': '94',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/095.jpg',
		    'text': '95',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/096.jpg',
		    'text': '96',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/097.jpg',
		    'text': '97',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/098.jpg',
		    'text': '98',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/099.jpg',
		    'text': '99',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/100.jpg',
		    'text': '100',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/101.jpg',
		    'text': '101',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/102.jpg',
		    'text': '102',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/103.jpg',
		    'text': '103',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/104.jpg',
		    'text': '104',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/105.jpg',
		    'text': '105',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/106.jpg',
		    'text': '106',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/107.jpg',
		    'text': '107',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/108.jpg',
		    'text': '108',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/109.jpg',
		    'text': '109',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/110.jpg',
		    'text': '110',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/111.jpg',
		    'text': '111',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/112.jpg',
		    'text': '112',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/113.jpg',
		    'text': '113',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/114.jpg',
		    'text': '114',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/115.jpg',
		    'text': '115',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/116.jpg',
		    'text': '116',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/117.jpg',
		    'text': '117',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/118.jpg',
		    'text': '118',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/119.jpg',
		    'text': '119',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/120.jpg',
		    'text': '120',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/121.jpg',
		    'text': '121',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/122.jpg',
		    'text': '122',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/123.jpg',
		    'text': '123',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/124.jpg',
		    'text': '124',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/125.jpg',
		    'text': '125',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/126.jpg',
		    'text': '126',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},

		{
			'images': 'images/127.jpg',
		    'text': '127',
		        'type': 'choice',
		        'choices': [{
		        'text': '<--return',
		            'target': 0
		    }, {
		        'text': '<--return',
		            'target': 0
		    }]
		
		},
	];
});