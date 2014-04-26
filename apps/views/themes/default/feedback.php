	<!-- feddback -->
	<button class="feedback vertical-text" data-toggle="modal" data-target="#feedbackModal">Sugerencias</button>
	<div class="modal fade" id="feedbackModal" tabindex="-1" role="dialog" aria-labelledby="feedbackTitle" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	        <h4 class="modal-title" id="feedbackTitle">Sugerencias</h4>
	      </div>
	      <div class="modal-body">
		      <label for="feedbackSelect">Escoja un tipo de sugerencia: </label>
		      <form action="sendMail.php" method="post">
		      	<div>
		      		<select name="feedbackSelect" id="feedbackSelect" class="form-control">
		      			<option value="" selected="selected">Escoja una opción</option>
			      		<option value="0">Sugerencia de diseño</option>
			      		<option value="1">Sugerencia de calcualdora de rookies</option>
			      		<option value="2">Sugerencia de calcualdora de resistencia</option>
			      		<option value="3">Sugerencia de futuras herramientras</option>
			      		<option value="4">Sugerencia general</option>
			      		<option value="5">Otras sugerencias</option>
		      		</select>
		      	</div>
		      	</br>
		      	<label for="feedbackTextarea">Escriba su sugerencia: </label>
		        <div>
		        	<textarea name="feedbackTextarea" id="feedbackTextarea" class="form-control"></textarea>
		        </div>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
	        <input type="submit" name="enviar" class="btn btn-primary" value="Enviar" />
	      </div>
	      </form>
	    </div>
	  </div>
	</div>
	<!-- /feddback -->