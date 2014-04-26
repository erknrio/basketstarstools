
	<div class="col-md-4 col-xs-22">
			<h3 class="potencial-header">POTENCIAL</h3>
			<form action="#" class="form-horizontal" role="form" onsubmit="return false;">
				<div class="form-group">
				<span class="col-md-2 col-xs-2 form-label">F&iacute;sico:</span>
					<div class="col-md-10 col-xs-10">
						<select id="potencial_0" name="potencial_0" class="potencial-select form-control">
							<option value="1" selected>1 estrella</option>
							<option value="2" >2 estrellas</option>
							<option value="3" >3 estrellas</option>
							<option value="4" >4 estrellas</option>
							<option value="5" >5 estrellas</option>
						</select>
					</div>
				</div>
				<div class="form-group">
				<span class="col-md-2 col-xs-2 form-label">Ataque:</span>
					<div class="col-md-10 col-xs-10">
						<select id="potencial_1" name="potencial_1" class="potencial-select form-control">
							<option value="1" selected>1 estrella</option>
							<option value="2" >2 estrellas</option>
							<option value="3" >3 estrellas</option>
							<option value="4" >4 estrellas</option>
							<option value="5" >5 estrellas</option>
						</select>
					</div>
				</div>
				<div class="form-group">
				<span class="col-md-2 col-xs-2 form-label">Defensa:</span>
					<div class="col-md-10 col-xs-10">
						<select id="potencial_2" name="potencial_2" class="potencial-select form-control">
							<option value="1" selected>1 estrella</option>
							<option value="2" >2 estrellas</option>
							<option value="3" >3 estrellas</option>
							<option value="4" >4 estrellas</option>
							<option value="5" >5 estrellas</option>
						</select>
					</div>
				</div>
			</form>

			<form action="#" id="formAltura" class="form-horizontal" role="form" onsubmit="return false;">
				<div class="form-group">
					<label for="txtEdad" class="col-md-2 col-xs-2 control-label">Edad: </label>
					<div class="col-md-10 col-xs-10">
						<input type="text" id="txtEdad" class="form-control" placeholder="Edad"/>
					</div>
				</div>
				<div class="form-group">
					<label for="txtAltura" class="col-md-2 col-xs-2 control-label">Altura Inicial: </label>
					<div class="col-md-10 col-xs-10">
						<input type="text" id="txtAltura" class="form-control" placeholder="Altura Inicial"/>
					</div>
				</div>
				<div class="form-group">
					<label for="txtAlturaMin" class="col-md-2 col-xs-2 control-label">Altura M&iacute;nima Final: </label>
					<div class="col-md-10 col-xs-10">
						<input type="text" id="txtAlturaMin" class="form-control" readonly/>
					</div>
				</div>
				<div class="form-group">
					<label for="txtAlturaMax" class="col-md-2 col-xs-2 control-label">Altura M&aacute;xima Final: </label>
					<div class="col-md-10 col-xs-10">
						<input type="text" id="txtAlturaMax" class="form-control" readonly/>
					</div>
				</div>
				<div>
					<input type='button' id='btnAltura' class="btn btn-primary btn-block" value='Calcular Altura'/>
					<input type='button' id="btnReset" class="btn btn-default btn-block" value='Restablecer'/>
				</div>
			</form>
	</div>