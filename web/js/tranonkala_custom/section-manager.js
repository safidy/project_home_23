$(document).ready(function(){
  $('#sortable').sortable({
      change: function(){
        reorderPreviewedSection();
      }
    }
  );

  $('.add-section-link').on('click', function(e){
    e.preventDefault();

    // add section to preview container
    addCreatedSectionToPreview($(this));

    // add section to created sections list
    addCreatedSectionToList($(this).attr('data-target-name'));

  })
});

function addCreatedSectionToPreview(trigger)
{
   var to_add_element = null;
   to_add_element = ($('div#section-block-container .'+trigger.attr('data-target-class'))).clone();

   var created_element_number = $('#created-section-number').text();
   var current_created_element_number = parseInt(created_element_number)+1;
   to_add_element.attr('id', 'section-'+current_created_element_number);
   $('#created-section-number').text(current_created_element_number);

   $('div#preview-container').append(to_add_element);
}

function addCreatedSectionToList(section_type_name)
{
  var created_element = null;
  created_element = $('<li></li>');
  created_element.text(section_type_name);

  // /!\ NEED REFACTORING /!\
  // only valid if addCreatedSectionToPreview() is called before this method
  var created_element_number = $('#created-section-number').text();
  created_element.attr('data-section-id', 'section-'+created_element_number);

  $('div#created-section-list #sortable').append(created_element);
}

function reorderPreviewedSection()
{

  $('#sortable li').each(function(){
    console.log($(this).attr('data-section-id'));
    $('div#preview-container').append($('#'+$(this).attr('data-section-id')));
  });

}
