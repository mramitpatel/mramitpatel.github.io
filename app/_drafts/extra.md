
{% for cat in site.category-list %}
### {{ cat }}
<ul>
{% for page in site.pages %}
{% if page.resource == true %}
{% for pc in page.categories %}
{% if pc == cat %}
<li><a href="{{ page.url }}">{{ page.title }}</a></li>
{% endif %}   <!-- cat-match-p -->
{% endfor %}  <!-- page-category -->
{% endif %}   <!-- resource-p -->
{% endfor %}  <!-- page -->
</ul>
{% endfor %}  <!-- cat -->



  {% for node in site.pages %}
    {% if page.url == node.url %}
      <li class="active"><a href="{{node.url}}" class="active">{{node.title}}</a></li>
    {% else %}
      <li><a href="{{node.url}}">{{node.title}}</a></li>
    {% endif %}
  {% endfor %}

  <section>
{% for i in (1..10) %}
<img src="/images/{{ page.cid }}/{{ i }}.jpg">
{% endfor %}
</section>