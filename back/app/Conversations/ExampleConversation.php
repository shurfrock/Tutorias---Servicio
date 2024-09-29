// Archivo: app/Conversations/ExampleConversation.php
namespace App\Conversations;

use BotMan\BotMan\Messages\Conversations\Conversation;

class ExampleConversation extends Conversation
{
    public function run()
    {
        $this->say('Hello from ExampleConversation!');
    }
}
