<?php
  $message = $_POST['message'];
  file_put_contents('messages.txt', $message . "\n", FILE_APPEND);
?>