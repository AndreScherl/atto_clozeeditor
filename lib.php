<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Atto text editor integration version file.
 *
 * @package    atto_cloze
 * @copyright  2016 Matthias Ostermann  <mail@matthias-ostermann.de>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

	/**
 	* Initialise the js strings required for this module.
 	*/
	function atto_cloze_strings_for_js() {
    	global $PAGE;

	    $PAGE->requires->strings_for_js(array('addanswer',
        	                                  'answer',
                    	                      'createcloze',
                                	          'editcloze',
                                	          'feedback',
                            	              'heading',
        	                                  'insert',
                                	          'multichoice',
        	                                  'multichoice_h',
        	                                  'multichoice_v',
        	                                  'numerical',
        	                                  'percentage',
                        	                  'points',
        	                                  'shortanswer',
        	                                  'shortanswer_c',
    	                                      'todo',
        	                                  'type'),
                                    	'atto_cloze');

	    $PAGE->requires->strings_for_js(array('top',
											  'bottom'),
                                    	  	  'editor');
	};