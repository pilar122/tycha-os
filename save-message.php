<?php
  $message = $_POST['message'];
  file_put_contents('messages.txt', $message . "\n", FILE_APPEND);
?>

<?php
  $messages = file_get_contents('messages.txt');
?>
