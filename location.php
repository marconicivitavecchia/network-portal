<?php
$isExternal = substr($_SERVER['SERVER_ADDR'],3,2)==="30";
$obj = new stdClass();
$obj->network = "internal";
if ($isExternal == "1") {
	$obj->network = "external";
}
echo json_encode($obj);
?>
