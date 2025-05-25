import { bootstrap, enableTooltip, enablePopover } from "./plugins/bootstrap";

try
{
    enableTooltip( false );
    enablePopover();
    window.bootstrap = bootstrap;
} catch ( exception )
{
    console.error( exception );
}