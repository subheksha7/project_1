 $(document).ready(function () { 
     $("#search_button").on('click',search);
     $("#field").on('keyup',search);
 });




function search() {
    
       var images={"movies":[
                     {"title": "Blue Streak", "year": 1999, "starring": "Martin Lawrence, Luke Wilson", "HD":true, "description":"Blue Streak is a 1999 American buddy cop comedy film directed by Les Mayfield and starring Martin Lawrence, Luke Wilson, Dave Chappelle, Peter Greene, Nicole Ari Parker and William Forsythe. The film was shot on location in California. The prime shooting spot was Sony Pictures Studios which is located in Culver City, California.","photo":"data/blue-Streak.jpg","rating":4},
                     {"title": "Mrs. Doubtfire", "year": 1993, "starring": "Robin Williams, Sally Field", "HD":false, "description":"Mrs. Doubtfire is a 1993 American comedy film starring Robin Williams (who also served as co-producer) and Sally Field and based on the novel Alias Madame Doubtfire by Anne Fine. It was directed by Chris Columbus and distributed by 20th Century Fox. It won the Academy Award for Best Makeup." ,"photo":"data/doubt_fire.jpg","rating":2},
                     {"title": "Life of Pi", "year": 2012, "starring": "Suraj Sharma, Irrfan Khan", "description":"Life of Pi is a Canadian fantasy adventure novel by Yann Martel published in 2001. The protagonist, Piscine Molitor \"Pi\" Patel, an Indian boy from Pondicherry, explores issues of spirituality and practicality from an early age. He survives 227 days after a shipwreck while stranded on a lifeboat in the Pacific Ocean with a Bengal tiger named Richard Parker.", "HD":true, "photo":"data/life_of_pi.jpg","rating":5},
                     {"title": "The Pacific", "year": 2010, "starring": "James Badge Dale, Joseph Mazzello","description":"The Pacific is a 2010 television series produced by HBO, Seven Network Australia, Sky Movies, Playtone and DreamWorks that premiered in the United States on 14 March 2010.", "HD":true, "photo":"data/pacific.jpg","rating":3},
                     {"title": "Rio", "year": 2011, "starring": "Jesse Eisenberg, Leslie Mann","description":"Rio is a 2011 American 3D computer-animated musical adventure-comedy film produced by Blue Sky Studios and directed by Carlos Saldanha. The title refers to the Brazilian city of Rio de Janeiro, where the film is set.","HD":true, "photo":"data/rio.jpg","rating":4},
                     {"title": "An Unfinished Life", "year": 2005, "starring": "Robert Redford, Jennifer Lopez","description":"An Unfinished Life is a 2005 drama film directed by Swedish director Lasse Hallström, and based on the Mark Spragg novel of the same name. The film stars Robert Redford, Jennifer Lopez, and Morgan Freeman.", "HD":false, "photo":"data/unfinished_life.jpg","rating":3},
                     {"title": "The Woman in Black", "year": 2012, "starring": "Lu Corfield, Daniel Radcliffe","description":"A young lawyer travels to a remote village where he discovers the vengeful ghost of a scorned woman is terrorizing the locals.", "HD":true, "photo":"data/woman_in_black.jpg","rating":3},
                     {"title": "The Mechanical Man", "year": 2012, "starring": "Jenna Fischer, Chris Messina","description":"The Giant Mechanical Man is an American dramedy film written and directed by Lee Kirk. It debuted at the 2012 Tribeca Film Festival and was distributed by Tribeca Films. ", "HD":true, "photo":"data/giant_mechanical_man.jpg","rating":3},
                     {"title": "Hugo", "year": 2011, "starring": "Asa Butterfield, Ben Kingsley","description":"Hugo is a 2011 American 3D historical adventure drama film directed and co-produced by Martin Scorsese and adapted for the screen by John Logan. Based on Brian Selznick's novel The Invention of Hugo Cabret, it is about a boy who lives alone in the Gare Montparnasse railway station in Paris in the 1930s.", "HD":true, "photo":"data/hugo.jpg","rating":1},
                     {"title": "Shrek 3", "year": 2007, "starring": "Mike Myers, Cameron Diaz","description":"When his new father-in-law, King Harold falls ill, Shrek is looked at as the heir to the land of Far, Far Away. Not one to give up his beloved swamp, Shrek recruits his friends Donkey and Puss in Boots to install the rebellious Artie as the new king. Princess Fiona, however, rallies a band of royal girlfriends to fend off a coup d'etat by the jilted Prince Charming.", "HD":false, "photo":"data/shrek3.gif","rating":4}
  
     
    ]};
 //   var movies_object = JSON.parse(movies);
    
    var search_bar=["Blue Streak (1999). Starring: Martin Lawrence. Luke Wilson",
            "Mrs. Doubtfire (1993). Starring: Robin Williams. Sally Field", 
            "Life of Pi (2012). Starring: Suraj Sharma. Irrfan Khan", 
            "The Pacific (2010). Starring: James Badge Dale. Joseph Mazzello", 
            "Rio (2011). Starring: Jesse Eisenberg. Leslie Mann", 
            "An Unfinished Life (2005). Starring: Robert Redford. Jennifer Lopez", 
            "The Woman in Black (2012). Starring: Lu Corfield. Daniel Radcliffe", 
            "The Mechanical Man (2012). Starring: Jenna Fischer. Chris Messina", 
            "Hugo (2011). Starring: Asa Butterfield. Ben Kingsley", 
            "Shrek 3 (2007). Starring: Mike Myers. Cameron Diaz"];
        
        
    var names = ["Blue Streak (1999). Starring: Martin Lawrence. Luke Wilson",
            "Mrs. Doubtfire (1993). Starring: Robin Williams. Sally Field", 
            "Life of Pi (2012). Starring: Suraj Sharma. Irrfan Khan", 
            "The Pacific (2010). Starring: James Badge Dale. Joseph Mazzello", 
            "Rio (2011). Starring: Jesse Eisenberg. Leslie Mann", 
            "An Unfinished Life (2005). Starring: Robert Redford. Jennifer Lopez", 
            "The Woman in Black (2012). Starring: Lu Corfield. Daniel Radcliffe", 
            "The Mechanical Man (2012). Starring: Jenna Fischer. Chris Messina", 
            "Hugo (2011). Starring: Asa Butterfield. Ben Kingsley", 
            "Shrek 3 (2007). Starring: Mike Myers. Cameron Diaz"];
        
    var html = "";
    var value = $("#field").val(); //get the value of the text field
    var show=false; //don't show suggestions

    for(var i=0;i<search_bar.length;++i){
        var start = search_bar[i].toLowerCase().search(value.toLowerCase().trim());
        if (start != -1) { //if there is a search match
            html += "<div class='sub_suggestions' data-item='" + search_bar[i] + "' >";
            html += search_bar[i].substring(0,start)+"<b>"+search_bar[i].substring(start,start+value.length)+"</b>"+search_bar[i].substring(start+value.length,search_bar[i].length);
            html += "</div>";
            show=true; //show suggestions
        }
    }
    if(show){
        $("#suggestions_box").html(html);
        //get the children of suggestions_box with .sub_suggestions class
        $("#suggestions_box").children(".sub_suggestions").on('click',function(){
            var item=$(this).attr('data-item'); //get the data
            $("#field").val(item); //show it in the field
            $("#suggestions_box").hide(); //hide the suggestion box
        });
        
        $("#suggestions_box").show();
    }
    else
       $("#suggestions_box").hide();
}

