var rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/;

/**
* Fancybox tag
*
* Syntax:
*   {% fancybox /path/to/image [caption] [title] %}
*/

hexo.extend.tag.register('fancybox', function(args){
  var original = args.shift();
  var caption = args.shift();
  var title = args.join(' ');

  return '<p><a class="fancybox" href="' + original + '" title="' + title + '">' +
    '<img src="' + original + '" alt="' + title + '"></a>' +
    (caption ? '<span class="caption">' + caption + '</span>' : '') + '</p>';
});