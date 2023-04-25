import { Box, Grid, styled } from "@mui/material";
import AvatarComponent from "../../atoms/Avatar";
import Dropdown from '../../atoms/DropDown/index';
import avatar from '../../../../public/assests/avatar.svg';

const StyledBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    width : '80px',
})

const Profile = () => {

    return (
        <Box >
            <StyledBox>
                <Grid data-testid="profileComponent"> 
                    <AvatarComponent src={avatar}></AvatarComponent>
                </Grid>
                <Dropdown></Dropdown>
            </StyledBox>
        </Box>
    );
}

export default Profile;