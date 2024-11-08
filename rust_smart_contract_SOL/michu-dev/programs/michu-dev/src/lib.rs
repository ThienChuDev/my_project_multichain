use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, Token, TokenAccount};
declare_id!("5yfcAnvddbi9j5bZSfiwtykmkBanSeaQBQiGwZHtYQG2");

#[program]
pub mod michu_dev {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
