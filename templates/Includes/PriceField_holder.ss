<div id="$Name" class="field price<% if extraClass %> $extraClass<% end_if %>">
	<% if Title %>
		<label class="left" for="$ID">$Title <span style="float:right;">$BaseCurrency</span></label>
	<% end_if %>
	<div class="middleColumn">
		$Field
	</div>
	<% if RightTitle %><label class="right" for="$ID">$RightTitle</label><% end_if %>
	<% if Message %><span class="message $MessageType">$Message</span><% end_if %>
</div>