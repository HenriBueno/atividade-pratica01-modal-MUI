import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Instagram, LinkedIn, PhoneIphone } from '@mui/icons-material';
import Link from '@mui/material/Link';
import { Tooltip } from '@mui/material';

export default function FolderList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Tooltip title="Phone">
              <PhoneIphone />
            </Tooltip>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="(51) 98445-2377" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Tooltip title="Linkedin">
              <LinkedIn />
            </Tooltip>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Link
              href="https://www.linkedin.com/in/henrique-cavalheiro-bueno-6802a7248/"
              target="_blank"
              rel="noopener"
              sx={{ color: 'black', textDecoration: 'none', '&:hover': { color: 'green' } }}
            >
              Meu Linkedin
            </Link>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Tooltip title="Instagram">
              <Instagram />
            </Tooltip>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Link
              href="https://www.instagram.com/henrique_cb.py/"
              target="_blank"
              rel="noopener"
              sx={{ color: 'black', textDecoration: 'none', '&:hover': { color: 'green' } }}
            >
              Meu instagram
            </Link>
          }
        />
      </ListItem>
    </List>
  );
}
